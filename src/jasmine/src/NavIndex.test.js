describe('navTest', () => {
  it("should correctly select the 'service' anchor element within the navigation menu", () => {
    const service = document.getElementById('nos-services');
    expect(service).not.toBe(false);
  });

  it("should correctly select the 'realisation' anchor element within the navigation menu", () => {
    const realisation = document.getElementById('nos-realisations');
    expect(realisation).not.toBe(false);
  });

  it("should correctly select the 'staff' anchor element within the navigation menu", () => {
    const staff = document.getElementById('notre-equipe');
    expect(staff).not.toBe(false);
  });
});
