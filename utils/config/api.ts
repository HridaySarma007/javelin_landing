import axios from 'axios';

const baseUrl = 'https://api.bytesbeyond.in';
const currentVersion = '/v1';
const apiUrl = `${baseUrl}${currentVersion}`;


const makeApiUrl = (path: string) => `${apiUrl}${path}`;

export const api = {
  baseUrl,
  currentVersion,
  apiUrl,
  auth: {
    requestOTP: makeApiUrl('/auth/requestOtp'),
    verifyOTP: makeApiUrl('/auth/verifyOtp'),
  },
  app: {
    sidebarItems: makeApiUrl('/app/sidebarItems'),
  },
};

// Generic GET request function
export async function getRequest(url: string, params = {}) {
    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      // Handle error
      console.error('GET request error:', error);
      throw error;
    }
  }
  
  // Generic POST request function
  export async function postRequest(url: string, data = {}) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      // Handle error
      console.error('POST request error:', error);
      throw error;
    }
  }
  
  // Generic PUT request function
  export async function putRequest(url: string, data = {}) {
    try {
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      // Handle error
      console.error('PUT request error:', error);
      throw error;
    }
  }
  
  // Generic DELETE request function
  export async function deleteRequest(url: string) {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      // Handle error
      console.error('DELETE request error:', error);
      throw error;
    }
  }

