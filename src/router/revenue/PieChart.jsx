import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { themes } from "../../utils/theme";

const data = [
  { name: 'Nhu yếu phẩm', value: 400 },
  { name: 'Đồ ăn', value: 300 },
  { name: 'Đồ Gia dụng', value: 300 },
  { name: 'Áo quần', value: 200 },
  { name: 'Nước uống', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = [
  themes.colors.primary200,
  themes.colors.primary300,
  themes.colors.primary400,
  themes.colors.primary,
  themes.colors.primary600,
  themes.colors.primary700,
  themes.colors.primary800,
];

function CategoryChart() {
  const handleMouseEnter = (data, index) => {
    console.log(`Clicked: ${data[index].name}, Value: ${data[index].value}`);
  };

  return (
    <PieChart width={320} height={320} style={{display:"flex", alignItems:"flex-start"}}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      
        onClick={handleMouseEnter}
      >
        Our Revenue
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default CategoryChart;
