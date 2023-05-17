<CardTitle className="card-title">
               {recipe.title}
            </CardTitle>
            <div>
               <Table>
                  <thead>
                     <tr>
                        <th>

                        </th>

                     </tr>
                  </thead>
                  <tbody className="recipecard-body">
                     {recipe.cuisine ? (<tr>
                        <th scope="row">
                           Cuisine
                        </th>
                        <td>
                           {recipe.cuisine}
                        </td>
                     </tr>)
                        : (
                           ''
                        )}

                     <tr>
                        <th scope="row">
                           Ingredients
                        </th>
                        <td>
                           {recipe.ingredients}
                        </td>
                     </tr>
                     {recipe.instructions ? (<tr>
                        <th scope="row">
                           Instructions:
                        </th>
                        <td>
                           {result = result.replace(regex, '')}
                        </td>
                     </tr>)
                        : (
                           ''
                        )}
                     
                     {recipe.avg_cal ? (<tr>
                        <th scope="row">
                           Avg Cal:
                        </th>
                        <td>
                           {recipe.avg_cal} cal
                        </td>
                     </tr>)
                        : (
                           ''
                        )}
                     <tr>
                        <td>
                        <ButtonGroup>
               <Button
                  // className="btn btn-warning .col-sm .col-sm-offset-1"
                  className="btn"
                  outline
                  // color="warning"
                  size="sm"
                  onClick={handleFavorite}
                  disabled={favorited}
               >
                  {favorited ? "favorited" : "favorite"}
               </Button>{' '}
               <Button
                  // className="btn btn-warning font-weight-bold mr-3"
                  className="btn"
                  outline
                  // color="warning"
                  size="sm"
                  onClick={handleLogRecipe}
               >
                  log
               </Button>
            </ButtonGroup>
                        </td>
                     </tr>
                  </tbody>
               </Table>
               </div>