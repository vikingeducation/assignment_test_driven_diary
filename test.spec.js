describe("testing toEqual", () => {
  it("example of comparing to objects with toBe", () => {
    let obj1 = {
      message: "Hello",
      author: "Karl"
    };
    let obj2 = {
      message: "Hello",
      author: "Karl"
    };
    expect(obj1).toEqual(obj2);
  });
  it("example of comparing to unequal objects with toBe", () => {
    let obj1 = {
      message: "ZZZZZ",
      author: "Karl"
    };
    let obj2 = {
      message: "Hello",
      author: "Karl"
    };
    expect(obj1).toEqual(obj2);
  });
  it("example of comparing to equal objects with different prototypes toBe", () => {
    function Entry() {
      this.message = "Hello";
      this.author = "Karl";
    }
    let obj1 = new Entry();
    let obj2 = {
      message: "Hello",
      author: "Karl"
    };
    expect(obj1).toEqual(obj2);
  });
});
