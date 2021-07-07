import http from "../http-common";
class TutorialDataService {
    getAll(params){
        return http.get("/tutorials", {params});
    }

    get(id){
        return http.get(`/tutorials/${id}`);
    }

    create(data){
        return http.post("/tutorials", data);
    }

    update(id, data){
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id){
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll(){
        return http.get(`/tutorials`);
    }

    findByTitle(title){
        return http.get(`/tutorials?title=${title}`)
    }
}

export default new TutorialDataService();