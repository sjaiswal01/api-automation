import { test, expect } from '@playwright/test';
import { environmentConstants } from '../test-data/environmentURL';

test('Verify total number of todos with complete todos', async ({ request }) => {
    const response = await request.get(environmentConstants.APIBaseUrl);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    
    // Verify total number of todos
    expect(responseBody.length).toBe(200);

    // Verify ‘completed’ todos  in return response
    for(const todo of responseBody)
        {
            expect(todo).toHaveProperty('completed');
        }
      
});

test('Verify first todos with their value', async ({ request }) => {
    const response = await request.get(environmentConstants.APIBaseUrl+'/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    
    expect(responseBody.userId).toBe(1);
    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe("delectus aut autem");
    expect(responseBody.completed).toBe(false);   
});