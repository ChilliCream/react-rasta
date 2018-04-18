import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// note: must mocked before importing modules like Container
jest.mock("./src/utils/bootstrap", () => jest.fn());
