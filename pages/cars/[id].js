import { useRouter } from "next/router";

export default function Car( {car}) {

    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <h1>You searched for a {id}</h1>
            <p>We have a {car.id} {car.model} that is {car.color}</p>
            <p>{car.image}</p>
        </>
    )
}

// at every request
export async function getServerSideProps({params}) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { car : data }
    }
}


// at build time
// export async function getStaticProps({ params }) {
//    const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();
//
//     return {
//         props: {car : data }
//     }
// }
//
// export async function getStaticPaths(){
//
//     const req = await fetch("http://localhost:3000/cars.json");
//     const data = await req.json();
//
//     const paths = data.map(car => {
//         return { params: { id : car } }
//     });
//
//     return {
//         paths,
//         fallback: false
//     };
//
// }