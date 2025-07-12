import base from './base.js'

const endpoint = 'producto'

const findAll = async () => await base.get(endpoint);
const search = async (q) => await base.get(`${endpoint}/search?q=${encodeURIComponent(q)}`);
const create = async (producto) => {
  const formData = new FormData();
  for (let key in producto) {
    formData.append(key, producto[key]);
  }

  const response = await fetch('https://backend-production-2cd4.up.railway.app/producto', {
    method: 'POST',
    body: formData // 👈 sin headers, FormData se encarga
  });

  return await response.json();
};

const update = async (payload) => await base.put(endpoint, payload);
const remove = async (id) => await base.remove(`${endpoint}/${id}`);
const findOne = async (id) => await base.get(`${endpoint}/${id}`);
const updateForm = async (id, payload) => {
  return await fetch(`https://backend-production-2cd4.up.railway.app/producto/${id}`, {
    method: 'PUT',
    body: payload
  }).then(res => res.json());
};

const api = { findAll, search, create, update, updateForm, remove, findOne };


export default api;