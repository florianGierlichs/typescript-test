export interface Instruction {
  id: string;
  label: string;
  component: "InstructionComponent";
}

const instructions: Instruction[] = [
  {
    id: "1",
    label: "Product name One",
    component: "InstructionComponent",
  },
  {
    id: "2",
    label: "Product name Two",
    component: "InstructionComponent",
  },
];

export default instructions;
