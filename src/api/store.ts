import moment from "moment";

const currentDateTime = new Date();
currentDateTime.setHours(20);
currentDateTime.setMinutes(33);
const minutesToAdd = Math.floor(Math.random() * (80 - 40)) + 40;
const mockDateTime = moment(currentDateTime).add(minutesToAdd, "minutes");

const store = {
  state: {
    currentDateTime: mockDateTime,
    workstations: [] as any[],
    engines: [] as any[],
  },
  setWorkstations(newValue: any[]): void {
    this.state.workstations = newValue;
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
};

export default store;
