const request = require("supertest");
const app = require("../app");

describe("USER REST API", () => {
  const requestParams = {
    firstName: "user1",
    lastName: "user1",
    password: "user11",
    confirmPassword: "user11",
    email: "user1@email.com"
  };

  test("1. It should register an user", () => {
    return request(app)
      .post("/api/users/register")
      .send(requestParams)
      .then(response => {
        expect(response.statusCode).toBe(201);
        expect(response.body.user).toBeTruthy();
        expect(response.body.isAuthenticated).toBe(true);
      });
  });

  test("2. It should not register an user with the same email", () => {
    return request(app)
      .post("/api/users/register")
      .send(requestParams)
      .then(response => {
        expect(response.statusCode).toBe(403);
        expect(response.body.errors[0].msg).toEqual("Email already in use");
      });
  });

  test("3. It should log in an user", () => {
    return request(app)
      .post("/api/users/login")
      .send({ email: requestParams.email, password: requestParams.password })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.isAuthenticated).toBe(true);
        expect(response.body.token).toBeTruthy();
        //save the token for later
        requestParams.token = response.body.token;
        requestParams._id = response.body.user._id;
      });
  });

  test("4. It should not log in an user with wrong credentials", () => {
    return request(app)
      .post("/api/users/login")
      .send({ email: requestParams.email, password: "whatever" })
      .then(response => {
        expect(response.statusCode).toBe(400);
      });
  });

  test("5. It should allow to change password ", () => {
    const currentPassword = requestParams.password;
    const newPassword = "user2";
    const user = {
      ...requestParams,
      currentPassword,
      newPassword
    };

    return request(app)
      .put("/api/users/changepassword")
      .set("Authorization", requestParams.token)
      .send(user)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.user._id).toEqual(requestParams._id);
      });
  });

  test("6. It should allow to edit an user ", () => {
    const newEmail = "user12@email.com";
    return request(app)
      .put("/api/users/" + requestParams._id)
      .set("Authorization", requestParams.token)
      .send({ email: newEmail })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.user.email).toEqual(newEmail);
        expect(response.body.user._id).toEqual(requestParams._id);
      });
  });

  test("7. It should allow to delete an user ", () => {
    return request(app)
      .delete("/api/users/" + requestParams._id)
      .set("Authorization", requestParams.token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.user._id).toEqual(requestParams._id);
      });
  });
  test("8. It should not allow to list users if not authenticated ", () => {
    return request(app)
      .get("/api/users/")
      .set("Authorization", "whatever")
      .then(response => {
        expect(response.statusCode).toBe(401);
      });
  });
  test("9. It should allow to list users if authenticated ", () => {
    return request(app)
      .get('/api/users/')
      .set('Authorization', requestParams.token)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.users)).toBe(true);
      });
  });
});
