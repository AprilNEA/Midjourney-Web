import useSWR from "swr";
import { getTrigger } from "@/app/api";

export type TriggerProps = {
  id: number;
};

const useTrigger = ({ id }: TriggerProps) => {
  const { data, error, isLoading } = useSWR(`/v1/trigger?id=${id}`, () =>
    getTrigger(id)
  );

  return { data, error, isLoading };
};

export default useTrigger;
