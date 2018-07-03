import Controller from '@ember/controller';

export default Controller.extend({

	actions: {
		addC:function(){

            var newPo = this.store.createRecord('post', {
                userId: this.get('carId'),
                title:this.get('carTitle'),
                body:this.get('carBody')
            });

		}
	}

});
