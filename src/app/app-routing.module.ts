import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { BooksComponent } from "./components/books/books.component";

const routes: Routes = [
  {
    path: "books",
    component: BooksComponent,
  },
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "**", redirectTo: "books" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
