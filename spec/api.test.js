const request = require('supertest');
const baseURL = 'http://localhost:8080';

const productID = 12345;

describe('GET /products', () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get("/products/");
    expect(response.statusCode).toBe(200);
  });

  it("should return products info", async () => {
    const response = await request(baseURL).get("/products/");
    expect(response._body.length >= 1).toBe(true);
  });
});

describe('GET /products/:id', () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get(`/products/${productID}`);
    expect(response.statusCode).toBe(200);
  });

  it("should return with product info in an object", async () => {
    const response = await request(baseURL).get(`/products/${productID}`);
    expect(response._body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.anything(),
        slogan: expect.anything(),
        description: expect.anything(),
        category: expect.anything(),
        default_price: expect.anything(),
        features: expect.anything()
      })
    )
  });
});

describe('GET /products/:id/related', () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get(`/products/${productID}/related`);
    expect(response.statusCode).toBe(200);
  });

  it("should return an array of products id", async () => {
    const response = await request(baseURL).get(`/products/${productID}/related`);
    expect(Array.isArray(response._body)).toBe(true);
  });
});

describe('GET /products/:id/styles', () => {
  it("should return 200", async () => {
    const response = await request(baseURL).get(`/products/${productID}/styles`);
    expect(response.statusCode).toBe(200);
  });

  it("should return an object with results as the key", async () => {
    const response = await request(baseURL).get(`/products/${productID}/styles`);
    expect(response._body.product_id).toEqual(productID.toString());
    expect(response._body.results).not.toBe(null);
  })
});
