import { render } from "@testing-library/react";
import SnapshotComponent from "./SnapshotComponent";

it("Snapshotテスト", () => {
  const { container } = render(<SnapshotComponent text="Hello, Snapshot2!" />);
  expect(container).toMatchSnapshot();
});
