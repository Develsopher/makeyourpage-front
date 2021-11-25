// export default (req, res) => {
//   if (req.method === "GET") {
//     try {
//       const todos = await new Promise((resolve, reject) => {
//         fs.readFile("/data/todo.json", (err, data) => {
//           if (err) {
//             return reject(err.message);
//           }
//           const todosData = data.toString();
//           if (!todosData) {
//             return resolve([]);
//           }
//           const todos = JSON.parse(data.toString());
//           return resolve(todos);
//         });
//       });
//       res.statusCode = 200;
//       return res.send(todos);
//     } catch (e) {
//       console.log(e);
//       res.statusCode = 500;
//       res.send(e);
//     }
//   }
// };
