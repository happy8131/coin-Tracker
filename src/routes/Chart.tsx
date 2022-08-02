import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartPros {
  coinId: string;
}

function Chart({ coinId }: ChartPros) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  const isDarks = useRecoilValue(isDarkAtom); //atom값을 가져와 사용한다.
  console.log(data?.map((price) => price.close));
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "hello",
              data: data?.map((price) => price.close) as [],
            },
            {
              name: "sales",
              data: [15, 18, 12, 78, 56],
            },
          ]}
          options={{
            theme: {
              mode: isDarks ? "dark" : "light",
            },
            chart: {
              height: 500,
              width: 500,
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisTicks: {
                show: false,
              },
              labels: { show: false },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
            },
            colors: ["red"],
          }}
        />
      )}
    </div>
  );
}

export default Chart;
