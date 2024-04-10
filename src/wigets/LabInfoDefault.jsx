import { Content } from "../components/Content"
import { Button } from "../components/Button"

import Typography from '@mui/material/Typography';

export function LabInfoDefault(){
    return(
        <>
        <Content>
          <Typography variant="h4" color="text.secondary">Лабораторная работа 1</Typography>
          <Typography variant="body1" color="text.secondary">
          Реализовать скрипт, который уведомит о полной загрузке страницы
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Реализовать кнопку счетчик, которая будет увеличивать счетчик на
            1 и вывести его значение на страницу (button onclick)
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Реализовать кнопку счетчик, которая будет уменьшать счетчик на 1
            реализовать с помощью listener click
          </Typography>
          <Typography variant="body1" color="text.secondary">Реализовать форму аутентификации пользователя (form)</Typography>
          <Typography variant="body1" color="text.secondary">Реализовать скрипт очистки данных формы</Typography>
          <Typography variant="body1" color="text.secondary">
            Реализовать скрипт отправки данных формы с помощью listener
            submit.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Без отправки на сервер провести валидацию введенных данных, если
            login==admin & pass==admin вывести сообщение об успехе, иначе
            сообщение о неуспехе
          </Typography>
          <Typography variant="body1" color="text.secondary">Реализовать скрипт сохранения учетных данных и
          автоподстановку оных с помощью localStorage
          </Typography>
          <Button>Готово</Button>
        </Content>
        </>
    )
}