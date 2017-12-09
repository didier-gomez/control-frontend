import { FormControl} from '@angular/forms';
export class CustomValidator {
  static regex(pattern: string): Function {
    return (control:  FormControl): {[key: string]: any} => {
      return control.value.match(pattern) ? null : {pattern: true};
    };
  }
}
