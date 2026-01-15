import { createAsyncThunk } from "@reduxjs/toolkit";

import { cartService } from "@api/services/cartService";

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async(arg, thunkAPI) => {
        try {
            const res = await cartService.get();
            return res.items;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.message || 'Unknown error');
        }
    }
);

export const addItemAsync = createAsyncThunk(
    'cart/addItemAsync',
    async(id, thunkAPI) => {
        try {
            const res = await cartService.add(id);
            return res.items;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.message || 'Unknown error');
        }
    }
);

export const updateItemAsync = createAsyncThunk(
    'cart/updateItemAsync',
    async({id, quantity}, thunkAPI) => {
        try {
            const res = await cartService.updateItem(id, quantity);
            return res.items;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.message || 'Unknown error');
        }
    }
);

export const clearCartAsync = createAsyncThunk(
    'cart/clearCartAsync',
    async(arg, thunkAPI) => {
        try {
            const res = await cartService.clear();
            return res.items;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.message || 'Unknown error');
        }
    }
);

export const formatCartAsync = createAsyncThunk(
    'cart/formatCartAsync',
    async(items, thunkAPI) => {
        try {
            const res = await cartService.format(items);
            return res.items;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.message || 'Unknown error');
        }
    }
);

export const syncCartAsync = createAsyncThunk(
    'cart/syncCartAsync',
    async(items, thunkAPI) => {
        try {
            const res = await cartService.sync(items);
            return res.items;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.message || 'Unknown error');
        }
    }
);