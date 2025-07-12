import base from './base.js';

const endpoint = 'orden';

const findAll = async () => await base.get(endpoint);
const findOne = async (id) => await base.get(`${endpoint}/${id}`);
const create = async (orden) => await base.post(endpoint, orden);

const api = { findAll, findOne, create };
export default api;
