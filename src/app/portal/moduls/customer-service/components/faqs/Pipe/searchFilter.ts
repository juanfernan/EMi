import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, arg: any): any {
        const resultPosts = [];

        if (arg == undefined) {
            return value;
        }

        for (const post of value) {
            if (post.Answer.indexOf(arg) > -1
                || post.CategoryName.indexOf(arg) > -1
                || post.AnswerText.indexOf(arg) > -1
                || post.Question.indexOf(arg) > -1
                || post.SubCategoryName.indexOf(arg) > -1
            ) {
                resultPosts.push(post);
            };
        };


        return resultPosts;




    }




}