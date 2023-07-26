import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../model/token.js'
import User from '../model/user.js';

dotenv.config();

export const singupUser = async (request, response) => {
    try {
        const { username, name, password } = request.body;

        // should be in email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            return response.status(400).json({ msg: 'Invalid email format for username' });
        }

        // at least 5 characters
        if (name.length < 5) {
            return response.status(400).json({ msg: 'Name should be at least 5 characters long' });
        }

        // at least 1 uppercase, 1 numeric, and 1 symbolic character
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        if (!passwordRegex.test(password)) {
            return response.status(400).json({ msg: 'Password should have at least 1 uppercase character, 1 numeric character, and 1 symbolic character and be at least 8 characters long' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = { username, name, password: hashedPassword };

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successful' });
    } catch (error) {
        // Check if the error is a validation error
        if (error.name === 'ValidationError') {
            // Send validation error messages to the frontend
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return response.status(400).json({ msg: validationErrors });
        } else {
            // For other server errors, return a generic message
            return response.status(500).json({ msg: 'Error while signing up user' });
        }
    }
};



export const loginUser = async (request, response) => {
    let user = await User.findOne({ username: request.body.username });
    if (!user) {
        return response.status(400).json({ msg: 'Username does not match' });
    }

    try {
        let match = await bcrypt.compare(request.body.password, user.password);
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            
            const newToken = new Token({ token: refreshToken });
            await newToken.save();
        
            response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken,name: user.name, username: user.username });
        
        } else {
            response.status(400).json({ msg: 'Password does not match' })
        }
    } catch (error) {
        response.status(500).json({ msg: 'error while login the user' })
    }
}

export const logoutUser = async (request, response) => {
    const token = request.body.token;
    await Token.deleteOne({ token: token });

    response.status(204).json({ msg: 'logout successfull' });
}