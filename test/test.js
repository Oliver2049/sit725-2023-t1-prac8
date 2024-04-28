var expect = require("chai").expect;
var chai = require("chai");
var chaiHttp = require("chai-http");
var server = "http://localhost:3000";

chai.use(chaiHttp);

describe("API Tests", function () {
  // Test GET API
  it("GET API should return statusCode of 200", function (done) {
    chai
      .request(server)
      .get("/api/cards")
      .end(function (err, res) {
        if (err) {
          console.error("GET error:", err);
          done(err);
        } else {
          expect(res).to.have.status(200);
          done();
        }
      });
  });

  // Test POST API
  it("POST API should post cat to DB", function (done) {
    let cat = {
      title: "Kitten 2",
      image: "image/Birman.jpg",
      link: "About Kitten 2",
      description: "Demo description about kitten 2",
    };
    chai
      .request(server)
      .post("/api/cards")
      .send(cat)
      .end(function (err, res) {
        if (err) {
          console.error("POST error:", err);
          done(err);
        } else {
          expect(res).to.have.status(200);
          done();
        }
      });
  });
});
