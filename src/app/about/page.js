import Herosection from "@/app/components/Herosection";

async function getData() {
  const dt = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    //cache: "force-cache", //=> SSG
    //cache: "no-store", //=> SSR
    next: { revalidate: 10 } //=>ISR
  });
  return dt.json();
}

//await waitUntilSymbol(4000)

const About = async () => {
    const data = await getData();
    return (
        <div>
            <Herosection title={"OUR STORY"} imageUrl ={"/about1.svg"} />
            <h4>Testing - {data.title}</h4>

            <p>This is our About page</p>
        </div>
    );
};

export default About;
