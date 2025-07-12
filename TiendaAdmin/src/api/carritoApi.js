import base from './base.js';

const endpoint = 'carrito';

const findAll = async () => await base.get(endpoint);
const findGuardados = async () => await base.get(`${endpoint}/guardados`);
const create = async (item) => await base.post(endpoint, item);
const update = async (payload) => await base.put(`${endpoint}/${payload.id}`, payload);
const guardar = async (id) => await base.put(`${endpoint}/guardar/${id}`, {});
const regresar = async (id) => await base.put(`${endpoint}/regresar/${id}`, {});
const remove = async (id) => await base.remove(`${endpoint}/${id}`);

const api = { findAll, findGuardados, create, update, guardar, regresar, remove };
export default api;
