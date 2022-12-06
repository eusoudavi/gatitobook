import { FormGroup } from '@angular/forms';


export function usuarioSenhaiguaisValidator(formGroup: FormGroup){
  const username = formGroup.get('userName')?. value ?? '';
  // SE O USERNAME FOR INDEFINIDO, SERÁ ATRIBUIDO VAZIO A ELE.
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()){
    return username != password ? null : {senhaIgualUsuario : true};
  } else {
    return null;
  }
}
