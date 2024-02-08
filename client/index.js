const PORT = 8080;
const endPoint = `http://localhost:${PORT}/getTimeStories`;

fetch(endPoint)
  .then(async (res) => {
    let data = await res.json();
    console.log({ data });
    appendData(data);
  })
  .catch((err) => console.log(err));

const appendData = (data) => {
  data.map((item) => {
    let div = document.createElement("div");
    div.className = "card";
    let h2 = document.createElement("h2");
    h2.innerText = item.title;
    let ref = document.createElement("a");
    ref.innerText = "Read this...";
    ref.href = item.link;
    div.append(h2, ref);
    document.querySelector(".storiesDiv").append(div);
  });
};
