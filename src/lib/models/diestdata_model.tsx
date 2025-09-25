export interface StatItem {
  title: string;
  unit: string;
  color: "success" | "warning" | "secondary";
  currentValue: string;
  differenceValue: number;
  icon: string;
}

export interface ApiResponse {
  message: string;
  success: boolean;
  data: StatItem[];
  errors: any;
}
