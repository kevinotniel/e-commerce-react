import React from 'react';
import Layout from '../modules/common/components/Layout'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import ProductCard from '@common/components/ProductCard'
// const HomePage = ( props ) => { menampilkan list api products
//   console.log("props =>", props.products);
// }

const HomePage = ({ products }) => { 
  const { list } = products 

  return(
    <Layout>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {list.map(list => {
            return ( 
              <Grid key={list.id} item xs={6} sm={6}>
                <ProductCard
                  productID={list.id}
                  img={list.img}
                  title={list.name}
                  promoLabel={list.promo}
                  price={list.price}
                  rating={list.rating}
                  sold={list.sold}
                />
              </Grid> 
            );
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();

  return {
    props: {
      // products: products 
       products // shortcut object key and value jika namanya sama
    },
    
  }
}

export default HomePage;

  // untuk melihat data dari list api nama product apakah keluar?
  // <Layout>
    //   <div>
    //     {
    //       list.map(list => {
    //         return(
    //           <p>{list.name}</p>
    //         )
    //       })
    //     }
    //   </div> 
    // </Layout>