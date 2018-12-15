<template>
 <b-row>
   
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

  <b-table striped hover :items="items" :fields="fields" :filter="filter" :per-page="pageSize" :current-page="pageIndex">
    <template slot="show_details" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
      </b-button>
      <!-- In some circumstances you may need to use @click.native.stop instead -->
      <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
     
    </template>
    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Product_ID:</b></b-col>
          <b-col>{{ row.item.id }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Created_at:</b></b-col>
          <b-col>{{ row.item.created_at }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Tags:</b></b-col>
          <b-col>{{ row.item.tags }}</b-col>
        </b-row>
        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
      </b-card>
    </template>
  </b-table>
   <b-col md="9" class="my-1">
  <b-pagination align="center" size="md" :total-rows="items.length" v-model="pageIndex" :per-page="pageSize">
    </b-pagination> 
     </b-col>
    <br>
 <b-col md="" class="my-1">
    <div>CurrentPage: {{pageIndex}}</div>  
     </b-col>
  </b-row>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      message: "Project 2",
      items: [],
      filter: null,
      pageSize:10,
      pageIndex:1,
      fields: [ {
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
          
        },
        {
          key:  'show_details'  
        } 
        ]
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  async mounted() {
    let products = await axios.get(
      "https://glacial-caverns-89319.herokuapp.com/api/products"
    );
    products = products.data.data;
    this.items = products;
    //   axios
    //   .get('https://glacial-caverns-89319.herokuapp.com/api/products')
    //   .then((response) => {
    //       console.log(response.data);
    //       this.products = response.data.data
    //   })
  }
}
</script>

<!-- table-details.vue -->