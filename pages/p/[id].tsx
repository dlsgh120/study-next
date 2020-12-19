import Layout from '../../components/Layout';

const Test = ({query}:any) =>{
    console.log(query)
    return(
        <Layout>
            {1}
        </Layout>
    );
}

Test.getInitialProps = async(context:any) =>{
    const query = context.query;
    return{
        query
    }
}
export default Test;