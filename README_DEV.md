
# etape pour le git 

   git checkout « ton nom »
   git status
   git add .
   git commit -m ‘ msg ’
   git push origin « ton nom »
   git merge
   git log       => voir tes commits 
 

********************* il faut je valide ta branche => pull requests
//Il faut comparer entre ta branche et la branche main

9/ git diff <le nom de ta branche >  main     git diff main 'ta branch'    => pour voir la diffrence entre ta branch et le main  
* Voir le changement uniquement pour mieux identifier rapidement les fichiers qui ont été modifiés  :
  git diff « le nom de ta branche » main --name—only
* comparer entre les commits :
  git log « branche 1 » .. « branche2 »
  git difftool -d  «nom de ta branche » main
  10/  Pour se mettre à jour avec la branche main
  git checkout main
  git pull
  git checkout « ta branche »
  git merge main









## Commandes de base : 
* npm i =>  Pour récupérer les dépendances  installées sur le projet 
* ng serve  =>  pour lancer le projet en local 




