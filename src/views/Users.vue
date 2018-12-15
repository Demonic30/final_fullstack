<template>
    <div>
        <h1>Users List</h1>
        <b-table striped hover 
        :items="products" 
        :fields="fields"
        :per-page="pageSize"
        :current-page="pageIndex"></b-table>
        <b-pagination align="center" size="md" :total-rows="products.length" v-model="pageIndex" :per-page="pageSize">
    </b-pagination> 
    <br>

    <div>CurrentPage: {{pageIndex}}</div>  
 </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      message: "Project 2",
      products: [],
      pageSize:10,
      pageIndex:1,
      fields: [
        {
          key: "id",
          sortable: true
        },
        {
          key: "title",
          sortable: true
        },
        {
          key: "price",
          sortable: true,
          variant: 'danger'
          
        }
      ]
    };
  },
  async mounted() {
    let products = await axios.get(
      "https://glacial-caverns-89319.herokuapp.com/api/products"
    );
    products = products.data.data;
    this.products = products;
    //   axios
    //   .get('https://glacial-caverns-89319.herokuapp.com/api/products')
    //   .then((response) => {
    //       console.log(response.data);
    //       this.products = response.data.data
    //   })
  }
};
</script>

