import instructions, { Instruction } from "./instructions";
import products, { Product } from "./products";

// COMPONENTS
interface ProductCompProps {
  content: Product;
}
const ProductComponent: React.FC<ProductCompProps> = ({ content }) => {
  return <h1>Product Component: {content.name}</h1>;
};

interface InstructionCompProps {
  content: Instruction;
}
const InstructionComponent: React.FC<InstructionCompProps> = ({ content }) => {
  return <h1>Product Component: {content.label}</h1>;
};
//

const datas = [...products, ...instructions];


const components = {
  ProductComponent,
  InstructionComponent,
};

const App: React.FC = () => {
  return (
    <div>
      {datas.map((data) => {
        const Component = components[data.component] as React.FC<{
          content: Product | Instruction;
        }>;
        return <Component content={data} />;
      })}
    </div>
  );
};

export default App;
