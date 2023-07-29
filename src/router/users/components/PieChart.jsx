import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import productApi from "../../../utils/api/productApi";

function PieChart({ chartData }) {

    
  const [dataCount, setData] = useState([]);
  const token = localStorage.getItem("Authorization");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.dashboard(token);

        setData(response.data.data.userRank);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [token]);

 

  const totalShiftCount = dataCount.map(item =>{
    return item[1]
  })





  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "User rank in 30 days"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;