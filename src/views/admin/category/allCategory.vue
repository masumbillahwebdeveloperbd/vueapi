<template>
    <div>
        <h2>All Category</h2>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="category,index in categories">
      <th scope="row">{{index+1}}</th>
      <td>{{category.category_name}}</td>
      <td>{{category.category_description}}</td>
      <td>{{category.publication_status}}</td>
      <td>
          <div class="btn-group">
              <router-link :to="{name:'edit-category',params:{category_id:category.id}}" class="btn btn-outline-warning">Edit</router-link :to="{name:'edit-category',params:{category_id:}}">
              <button class="btn btn-outline-danger" @click=deleteCategory(category.id)>Delete</button>
          </div>
      </td>
    </tr>
    
  </tbody>
</table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            categories:[]
        }
    },
    methods:{
        allCategory(){
            axios.get('/category')
            .then(response=>{
                this.categories=response.data
            })
            .catch(error=>{
                console.log(error)
            })
        },
        deleteCategory(id){
               axios.delete('/category/'+id)
            .then(response=>{
                console.log(response)
                this.allCategory()
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    mounted(){
        this.allCategory()
    }
}
</script>>
<style>

</style>