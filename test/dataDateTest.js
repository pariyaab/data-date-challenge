//During the test the env variable is set to test
process.env.NODE_ENV = "test";

let ObjectStorage = require("../apps/data-manager/models/data");
const server = "127.0.0.1:5000";
//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();

chai.use(chaiHttp);
describe("/POST search", () => {
    it("Create User Testing", (done) => {
        let data = {
            tags: ["javascript", "isDeleted"],
            sortIndex: 0,
            pageSize: 20,
            pageIndex: 0,
        };
        chai.request("127.0.0.1:5000")
            .post("/search")
            .send(data)
            .end((err, res) => {
                chai.expect(res.status).to.equal(200);
                done();
            });
    });
});
