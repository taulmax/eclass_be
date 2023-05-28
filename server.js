const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

let assignmentList = require("./assignmentList.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "./eclass_fe/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./eclass_fe/build/index.html"));
});

// 미해결 과제 리스트
app.get("/unresolved", (req, res) => {
  const unresolved = assignmentList.filter((item) => item.isDone === false);
  res.json(unresolved);
});

// 완료 과제 리스트
app.get("/resolved", (req, res) => {
  const resolved = assignmentList.filter((item) => item.isDone === true);
  res.json(resolved);
});

// 전체 리스트에서 과목명 검색
app.get("/search/lecture/:text", (req, res) => {
  const searched = assignmentList.filter((item) =>
    item.lecture.includes(req.params.text)
  );
  res.json(searched);
});

// 전체 리스트에서 과제명 검색
app.get("/search/title/:text", (req, res) => {
  const searched = assignmentList.filter((item) =>
    item.title.includes(req.params.text)
  );
  res.json(searched);
});

// 저장 저장
app.post("/save", (req, res) => {
  if (req.body.data) {
    const { id, userWritings } = req.body.data;
    const newAssignmentList = assignmentList.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, isDone: true, userWritings: userWritings };
        return newItem;
      }
      return item;
    });
    fs.writeFileSync("assignmentList.json", JSON.stringify(newAssignmentList));
    assignmentList = newAssignmentList;
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
