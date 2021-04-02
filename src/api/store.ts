import moment from "moment";

const store = {
  state: {
    currentDateTime: new Date(),
    workstations: [] as any[],
    engines: [] as any[],
  },
  setWorkstations(newValue: any[]): void {
    this.state.workstations = newValue;
    this.setMockDateTime();
  },
  clearWorkstations(): void {
    this.state.workstations = [];
  },
  setEngines(newValue: any[]): void {
    this.state.engines = newValue;
  },
  clearEngines(): void {
    this.state.engines = [];
  },
  setMockDateTime(): void {
    // get the lowest entryTime from all of the workstations and set the current time to a random about of time after that
    if (this.state.workstations.length < 1) {
      return;
    }
    const entryTimes = this.state.workstations.filter((x) => x.currentProduct).map((x) => x.currentProduct.entryTime as number);
    const lowestEntryTimeDateValue = new Date(
      this.state.workstations
        .filter((x) => x.currentProduct)
        .map((x) => x.currentProduct.entryTime)
        .find((x) => x === Math.min(...entryTimes)),
    );

    const currentDateTime = new Date();
    currentDateTime.setHours(lowestEntryTimeDateValue.getHours());
    currentDateTime.setMinutes(lowestEntryTimeDateValue.getMinutes());
    const minutesToAdd = Math.floor(Math.random() * (65 - 40)) + 40;
    const mockDateTime = moment(currentDateTime).add(minutesToAdd, "minutes");
    this.state.currentDateTime = mockDateTime.toDate();
  },
};

export default store;
