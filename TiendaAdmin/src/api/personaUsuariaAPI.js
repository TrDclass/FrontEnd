import base from './base.js';

const endpoint = 'personaUsuaria';

const findAll = async () => await base.get(endpoint);

const search = async (q) => await base.get(`${endpoint}/search?q=${encodeURIComponent(q)}`);

const create = async (personaUsuaria) => {
  const formData = new FormData();
  for (let key in personaUsuaria) {
    formData.append(key, personaUsuaria[key]);
  }

  const response = await fetch('http://localhost:3001/personaUsuaria', {
  method: 'POST',
  body: formData
  });

  return await response.json();
};

const update = async (payload) => await base.put(endpoint, payload);

const remove = async (id) => await base.remove(`${endpoint}/${id}`);

const findOne = async (id) => await base.get(`${endpoint}/${id}`);

const updateForm = async (id, payload) => {
  return await fetch(`http://localhost:3001/personaUsuaria/${id}`, {
    method: 'PUT',
    body: payload
  }).then(res => res.json());
};

const api = { findAll, search, create, update, updateForm, remove, findOne };

export default api;
