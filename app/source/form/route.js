import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('rental');
    },

    actions:{
        save(model){
            this.store.createRecord('rental',{
                title: model.title,
                owner: model.owner,
                city: model.city
            }).save();

             swal({
                title:"",
                text: "Rental added successfully",
                type: "success",
            })
        }
    }
});
