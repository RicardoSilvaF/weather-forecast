import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'dayjs/locale/pt-br';

export default function GraphBox({ dataForecast }) {
    return (
      <GraphContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={dataForecast}
            margin={{
              top: 5,
              right: 30,
              left: -30,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="#f7f7f7" />
            <XAxis dataKey="dt" label={{ position: "insideBottom", offset: -10 }} />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temp"
              name="Temperatura"
              stroke="#ff8d33"
              strokeWidth={2}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </GraphContainer>
    );
  }

const GraphContainer = styled.div`
    min-width: 300px;
    max-width: 500px;
    height: 200px;
    margin-top: 25px;
    font-size: 10px;
`;