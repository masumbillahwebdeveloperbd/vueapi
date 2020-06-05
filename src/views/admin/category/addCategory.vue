<template>
    <div class="w-50 mt-5 col-md-8">
    <form @submit.prevent="addCategory">
  <div class="form-group row">
      
    <label for="category_name" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="category_name" v-model="form.category_name"
      :class="{ 'is-invalid': form.errors.has('category_name') }">
      <has-error :form="form" field="category_name"></has-error>
    </div>
  </div>
  <div class="form-group row">
    <label for="description" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
        <textarea name="category_description" id="category_description" :class="{ 'is-invalid': form.errors.has('category_description') }" class="form-control"  cols="20" rows="5" v-model="form.category_description">

        </textarea>
        <has-error :form="form" field="category_description"></has-error>
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Publication Status</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" :class="{ 'is-invalid': form.errors.has('publication_status') }" name="publication_status" v-model="form.publication_status" id="gridRadios1" value="1"
        >
        <has-error :form="form" field="publication_status"></has-error>
          <label class="form-check-label" for="gridRadios1">
            Published
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio"  :class="{ 'is-invalid': form.errors.has('publication_status') }" name="publication_status" v-model="form.publication_status" id="gridRadios2" value="0">
          <has-error :form="form" field="publication_status"></has-error>
          <label class="form-check-label" for="gridRadios2">
            Un Published
          </label>
        </div>
        
      </div>
    </div>
  </fieldset>
  
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary ">Add Category</button>
    </div>
  </div>
</form>
</div>
</template>
<script>
export default {
    data(){
        return{
        form: new Form({
            category_name:null,
            category_description:null,
            publication_status:null
      })
        }
    },
    methods:{
        addCategory(){
            
            this.form.post('/category')
            .then(response=>{
              iziToast.success({
    title: 'OK',
    message: 'Successfully inserted record!',
});
                this.$router.push({name:'all-category'})
                console.log('done')
            })
            .catch()
        }
    }
}
</script>