import { Button } from "@/shared/ui/button/Button.tsx";


export const MainPage = () => {
  return (
    <div>
      главная
      <Button
      onClick={() => console.log('Тест')}
      >
        Далее
      </Button>
    </div>
  );
}