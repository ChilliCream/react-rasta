import { configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactSixteenAdapter() });
jest.mock("./src/utils/bootstrap", () => jest.fn());
