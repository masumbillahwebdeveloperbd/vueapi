<template>
    <div>
        <div class="btn btn-outline-success  float-right" data-toggle="modal" data-target="#exampleModal">Add Product</div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Short Description</th>
      <th scope="col">Long Description</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>zz</td>
      <td>shirt</td>
      <td>mm nn</td>
      <td>mm nn</td>
      <td>8888</td>
      <td>1.jpg</td>
      <td>
          <div class="btn-group">
              <button class="btn btn-outline-warning">Edit</button>
              <button class="btn btn-outline-danger">Delete</button>
          </div>
      </td>
    </tr>
    
  </tbody>
</table>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
    <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label">Category</label>
    <div class="col-sm-10">
    <select class="form-control" id="exampleFormControlSelect1">
      <option value="">--Select--</option>
      <option>1</option>
     
    </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="description" class="col-sm-2 col-form-label">Short Description</label>
    <div class="col-sm-10">
        <textarea name="category_description" id="category_description" :class="{ 'is-invalid': form.errors.has('category_description') }" class="form-control"  cols="20" rows="5" v-model="form.category_description">

        </textarea>
        <has-error :form="form" field="category_description"></has-error>
    </div>
  </div>
    <div class="form-group row">
    <label for="description" class="col-sm-2 col-form-label"> Long Description</label>
    <div class="col-sm-10">
        <textarea name="category_description"  id="category_description" :class="{ 'is-invalid': form.errors.has('category_description') }" class="form-control"  cols="20" rows="2" v-model="form.category_description">

        </textarea>
        <has-error :form="form" field="category_description"></has-error>
    </div>
  </div>
    <div class="form-group row">
      
    <label for="category_name" class="col-sm-2 col-form-label">Price</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="category_name" v-model="form.category_name"
      :class="{ 'is-invalid': form.errors.has('category_name') }">
      <has-error :form="form" field="category_name"></has-error>
    </div>
  </div>
      <div class="form-group row">
      
    <label for="category_name" class="col-sm-2 col-form-label">Image</label>
    <div class="col-sm-10">
      <input type="file" class="form-control-file" id="category_name">
      
    </div>
  </div>
  

  <div class="custom-file">
      
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>

  
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Status</legend>
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
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
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
}
</script>
