import speakersModel from '../../app/models/speakersModel.js';

export default {
    insert: async (data)=>{return speakersModel.insert(data)},
    listAll: async (search)=>{return speakersModel.findAll(search)},
    remove: async (data)=>{return speakersModel.remove(data)},
    update: async (target,data)=>{return speakersModel.update(target,data)}
}
