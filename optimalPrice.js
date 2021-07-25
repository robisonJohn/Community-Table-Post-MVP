/*
The purpose of optimalPrice is to build an algorithm which determines the optimal point at which 
a good (in this case, food) should be sold such that the food's tax deductible value has a higher expected value
than its expected retail return value.

Let us define its tax deductible value as:
F(r) = t * r
Where t is the tax deductible percentage and r is the retail price of a given good. In this particular case,
t is equal to 25% of fair market value.

Similarly, let us define the expected value for the sale of a retail good as 
G(r) = r * [ 1 + (-d) ] ^ (t)  
Where r represents the retail price of a good, d represents the rate at which a good decays (the inverse of its shelf
life) and t represents the time that has passed.

Therefore, we can define an expected profit function, P(r), such that
P(r) = G(r) - F(r)
When P(r) >= 0, it is more optimal for stores to hold produce and dry good within their stores. However, if P(r) < 0,
then it is more optimal for the stores to donate the food in order to offset the risk of losing the food entirely.
This will enable local businesses to maximize their profits while also minimizing the amount of food wasted within the system.
*/

